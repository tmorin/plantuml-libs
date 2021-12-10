# LocalSsd


```text
gcp/Item/LocalSsd
```

```text
include('gcp/Item/LocalSsd')
```



| Illustration | LocalSsd | LocalSsdCard | LocalSsdGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/LocalSsd.png) | ![illustration for LocalSsd](../../gcp/Item/LocalSsd.Local.png) | ![illustration for LocalSsdCard](../../gcp/Item/LocalSsdCard.Local.png) | ![illustration for LocalSsdGroup](../../gcp/Item/LocalSsdGroup.Local.png) |




## LocalSsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element LocalSsd
include('gcp/Item/LocalSsd')

' renders the element
LocalSsd('LocalSsd', 'Local Ssd', 'an optional tech label')
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

' loads the Item which embeds the element LocalSsd
include('gcp/Item/LocalSsd')

' renders the element
LocalSsd('LocalSsd', 'Local Ssd', 'an optional tech label')
@enduml
```

## LocalSsdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element LocalSsdCard
include('gcp/Item/LocalSsd')

' renders the element
LocalSsdCard('LocalSsdCard', 'Local Ssd Card', 'an optional description')
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

' loads the Item which embeds the element LocalSsdCard
include('gcp/Item/LocalSsd')

' renders the element
LocalSsdCard('LocalSsdCard', 'Local Ssd Card', 'an optional description')
@enduml
```

## LocalSsdGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element LocalSsdGroup
include('gcp/Item/LocalSsd')

' renders the element
LocalSsdGroup('LocalSsdGroup', 'Local Ssd Group', 'an optional tech label') {
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

' loads the Item which embeds the element LocalSsdGroup
include('gcp/Item/LocalSsd')

' renders the element
LocalSsdGroup('LocalSsdGroup', 'Local Ssd Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

