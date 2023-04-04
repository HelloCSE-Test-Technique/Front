<template>
    <div class="tab-container">
        <div class="tab-header">
            <div v-for="tab in tabs" :key="tab.id" :class="['tab', { active: tab.id === activeTab }]"
                @click="activateTab(tab.id)">
                {{ tab.title }}
            </div>
        </div>
        <div class="tab-content">
            <div v-if="activeTab === 'create'">
                <form>
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" v-model="firstName">
                    <label for="last-name">Last Name:</label>
                    <input type="text" id="last-name" v-model="lastName">
                    <label for="image">Image:</label>
                    <input type="file" id="image" accept="image/*" @change="handleFileUpload">
                    <label for="description">Description:</label>
                    <textarea id="description" v-model="description"></textarea>
                    <button @click.prevent="createItem(firstName, lastName, image, description)">Create</button>
                </form>
            </div>
            <div v-if="activeTab === 'update'">
                <!-- contenu de l'onglet "update" -->
            </div>
            <div v-if="activeTab === 'delete'">
                <!-- contenu de l'onglet "delete" -->
            </div>
        </div>
    </div>
</template>
  
<script>
import { useStarStore } from "@/stores/stars";
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const store = useStarStore();

        const tabs = [
            { id: 'create', title: 'Create' },
            { id: 'update', title: 'Update' },
            { id: 'delete', title: 'Delete' }
        ];

        const activeTab = 'create';

        const activateTab = (tabId) => {
            activeTab = tabId;
        };

        const image = ref("");

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                image.value = reader.result;
            };
        };



        const createItem = (lastName, firstName, image, description) => {
            store.createStar(lastName, firstName, image, description);
        };

        return {
            tabs,
            activeTab,
            firstName: '',
            lastName: '',
            image,
            description: '',
            activateTab,
            handleFileUpload,
            createItem
        };
    },

};
</script>
  
<style>
.tab {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
}

.tab.active {
    background-color: #ccc;
}

.tab-content {
    padding: 20px;
    border: 1px solid #ccc;
}

input[type="text"],
textarea {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="text"]:focus,
textarea:focus {
    outline: none;
    border-color: #007aff;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.25);
}
</style>
  