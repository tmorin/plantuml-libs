# Modifiers Storage

```text
gcp/Item/ExpandedProductCardIcons/ModifiersStorage
```

```text
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
```

|icon|card|element|group|
|---|---|---|---|
|![](ModifiersStorage.png)|![](ModifiersStorage.card.png)|![](ModifiersStorage.element.png)|![](ModifiersStorage.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorageCard('modifiers_storage', 'Modifiers Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorageCard('modifiers_storage', 'Modifiers Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorage('modifiers_storage', 'Modifiers Storage', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorage('modifiers_storage', 'Modifiers Storage', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorageGroup('modifiers_storage', 'Modifiers Storage', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ModifiersStorage element
include('gcp/Item/ExpandedProductCardIcons/ModifiersStorage')
ModifiersStorageGroup('modifiers_storage', 'Modifiers Storage', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

