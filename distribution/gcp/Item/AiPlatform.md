# AiPlatform


```text
gcp/Item/AiPlatform
```

```text
include('gcp/Item/AiPlatform')
```



| Illustration | AiPlatform | AiPlatformCard | AiPlatformGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/AiPlatform.png) | ![illustration for AiPlatform](../../gcp/Item/AiPlatform.Local.png) | ![illustration for AiPlatformCard](../../gcp/Item/AiPlatformCard.Local.png) | ![illustration for AiPlatformGroup](../../gcp/Item/AiPlatformGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AiPlatformXs>`
- `<$AiPlatformSm>`
- `<$AiPlatformMd>`
- `<$AiPlatformLg>`





## AiPlatform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AiPlatform
include('gcp/Item/AiPlatform')

' renders the element
AiPlatform('AiPlatform', 'Ai Platform', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AiPlatform
include('gcp/Item/AiPlatform')

' renders the element
AiPlatform('AiPlatform', 'Ai Platform', 'an optional tech label', 'an optional description')
@enduml
```

## AiPlatformCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AiPlatformCard
include('gcp/Item/AiPlatform')

' renders the element
AiPlatformCard('AiPlatformCard', 'Ai Platform Card', 'an optional description')
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

' loads the Item which embeds the element AiPlatformCard
include('gcp/Item/AiPlatform')

' renders the element
AiPlatformCard('AiPlatformCard', 'Ai Platform Card', 'an optional description')
@enduml
```

## AiPlatformGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AiPlatformGroup
include('gcp/Item/AiPlatform')

' renders the element
AiPlatformGroup('AiPlatformGroup', 'Ai Platform Group', 'an optional tech label') {
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

' loads the Item which embeds the element AiPlatformGroup
include('gcp/Item/AiPlatform')

' renders the element
AiPlatformGroup('AiPlatformGroup', 'Ai Platform Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

