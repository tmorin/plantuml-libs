# Memorystore


```text
gcp/Item/Memorystore
```

```text
include('gcp/Item/Memorystore')
```



| Illustration | Memorystore | MemorystoreCard | MemorystoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Memorystore.png) | ![illustration for Memorystore](../../gcp/Item/Memorystore.Local.png) | ![illustration for MemorystoreCard](../../gcp/Item/MemorystoreCard.Local.png) | ![illustration for MemorystoreGroup](../../gcp/Item/MemorystoreGroup.Local.png) |




## Memorystore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Memorystore
include('gcp/Item/Memorystore')

' renders the element
Memorystore('Memorystore', 'Memorystore', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Memorystore
include('gcp/Item/Memorystore')

' renders the element
Memorystore('Memorystore', 'Memorystore', 'an optional tech label', 'an optional description')
@enduml
```

## MemorystoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element MemorystoreCard
include('gcp/Item/Memorystore')

' renders the element
MemorystoreCard('MemorystoreCard', 'Memorystore Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element MemorystoreCard
include('gcp/Item/Memorystore')

' renders the element
MemorystoreCard('MemorystoreCard', 'Memorystore Card', 'an optional description')
@enduml
```

## MemorystoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element MemorystoreGroup
include('gcp/Item/Memorystore')

' renders the element
MemorystoreGroup('MemorystoreGroup', 'Memorystore Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element MemorystoreGroup
include('gcp/Item/Memorystore')

' renders the element
MemorystoreGroup('MemorystoreGroup', 'Memorystore Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

