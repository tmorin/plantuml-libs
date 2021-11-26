# Manifest


```text
homecloud-2/Container/Manifest
```

```text
include('homecloud-2/Container/Manifest')
```



| Illustration | Manifest | ManifestCard | ManifestGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-2/Container/Manifest.png) | ![illustration for Manifest](../../homecloud-2/Container/Manifest.Local.png) | ![illustration for ManifestCard](../../homecloud-2/Container/ManifestCard.Local.png) | ![illustration for ManifestGroup](../../homecloud-2/Container/ManifestGroup.Local.png) |




## Manifest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Manifest
include('homecloud-2/Container/Manifest')

' renders the element
Manifest('Manifest', 'Manifest', 'an optional tech label')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element Manifest
include('homecloud-2/Container/Manifest')

' renders the element
Manifest('Manifest', 'Manifest', 'an optional tech label')
@enduml
```

## ManifestCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element ManifestCard
include('homecloud-2/Container/Manifest')

' renders the element
ManifestCard('ManifestCard', 'Manifest Card', 'an optional description')
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element ManifestCard
include('homecloud-2/Container/Manifest')

' renders the element
ManifestCard('ManifestCard', 'Manifest Card', 'an optional description')
@enduml
```

## ManifestGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-2/bootstrap')

' loads the Item which embeds the element ManifestGroup
include('homecloud-2/Container/Manifest')

' renders the element
ManifestGroup('ManifestGroup', 'Manifest Group', 'an optional tech label') {
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
include('homecloud-2/bootstrap')

' loads the Item which embeds the element ManifestGroup
include('homecloud-2/Container/Manifest')

' renders the element
ManifestGroup('ManifestGroup', 'Manifest Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

