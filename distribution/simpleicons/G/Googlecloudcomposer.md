# Googlecloudcomposer


```text
simpleicons/G/Googlecloudcomposer
```

```text
include('simpleicons/G/Googlecloudcomposer')
```



| Illustration | Googlecloudcomposer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlecloudcomposer.png) | ![illustration for Googlecloudcomposer](../../simpleicons/G/Googlecloudcomposer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglecloudcomposerXs>`
- `<$GooglecloudcomposerSm>`
- `<$GooglecloudcomposerMd>`
- `<$GooglecloudcomposerLg>`





## Googlecloudcomposer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlecloudcomposer
include('simpleicons/G/Googlecloudcomposer')

' renders the element
Googlecloudcomposer('Googlecloudcomposer', 'Googlecloudcomposer', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlecloudcomposer
include('simpleicons/G/Googlecloudcomposer')

' renders the element
Googlecloudcomposer('Googlecloudcomposer', 'Googlecloudcomposer', 'an optional tech label', 'an optional description')
@enduml
```

