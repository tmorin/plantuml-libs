# DataStudio


```text
gcp/Item/BigData/DataStudio
```

```text
include('gcp/Item/BigData/DataStudio')
```



| Illustration | DataStudio | DataStudioCard | DataStudioGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/BigData/DataStudio.png) | ![illustration for DataStudio](../../../gcp/Item/BigData/DataStudio.Local.png) | ![illustration for DataStudioCard](../../../gcp/Item/BigData/DataStudioCard.Local.png) | ![illustration for DataStudioGroup](../../../gcp/Item/BigData/DataStudioGroup.Local.png) |




## DataStudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudio
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudio('DataStudio', 'Data Studio', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudio
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudio('DataStudio', 'Data Studio', 'an optional tech label')
@enduml
```

## DataStudioCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudioCard
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudioCard('DataStudioCard', 'Data Studio Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudioCard
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudioCard('DataStudioCard', 'Data Studio Card', 'an optional description')
@enduml
```

## DataStudioGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudioGroup
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudioGroup('DataStudioGroup', 'Data Studio Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DataStudioGroup
include('gcp/Item/BigData/DataStudio')

' renders the element
DataStudioGroup('DataStudioGroup', 'Data Studio Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

