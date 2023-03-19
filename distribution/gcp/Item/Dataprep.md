# Dataprep


```text
gcp/Item/Dataprep
```

```text
include('gcp/Item/Dataprep')
```



| Illustration | Dataprep | DataprepCard | DataprepGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Dataprep.png) | ![illustration for Dataprep](../../gcp/Item/Dataprep.Local.png) | ![illustration for DataprepCard](../../gcp/Item/DataprepCard.Local.png) | ![illustration for DataprepGroup](../../gcp/Item/DataprepGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DataprepXs>`
- `<$DataprepSm>`
- `<$DataprepMd>`
- `<$DataprepLg>`





## Dataprep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Dataprep
include('gcp/Item/Dataprep')

' renders the element
Dataprep('Dataprep', 'Dataprep', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dataprep
include('gcp/Item/Dataprep')

' renders the element
Dataprep('Dataprep', 'Dataprep', 'an optional tech label', 'an optional description')
@enduml
```

## DataprepCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataprepCard
include('gcp/Item/Dataprep')

' renders the element
DataprepCard('DataprepCard', 'Dataprep Card', 'an optional description')
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

' loads the Item which embeds the element DataprepCard
include('gcp/Item/Dataprep')

' renders the element
DataprepCard('DataprepCard', 'Dataprep Card', 'an optional description')
@enduml
```

## DataprepGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataprepGroup
include('gcp/Item/Dataprep')

' renders the element
DataprepGroup('DataprepGroup', 'Dataprep Group', 'an optional tech label') {
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

' loads the Item which embeds the element DataprepGroup
include('gcp/Item/Dataprep')

' renders the element
DataprepGroup('DataprepGroup', 'Dataprep Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

