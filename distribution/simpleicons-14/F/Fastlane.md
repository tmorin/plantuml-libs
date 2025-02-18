# Fastlane


```text
simpleicons-14/F/Fastlane
```

```text
include('simpleicons-14/F/Fastlane')
```



| Illustration | Fastlane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fastlane.png) | ![illustration for Fastlane](../../simpleicons-14/F/Fastlane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FastlaneXs>`
- `<$FastlaneSm>`
- `<$FastlaneMd>`
- `<$FastlaneLg>`





## Fastlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fastlane
include('simpleicons-14/F/Fastlane')

' renders the element
Fastlane('Fastlane', 'Fastlane', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fastlane
include('simpleicons-14/F/Fastlane')

' renders the element
Fastlane('Fastlane', 'Fastlane', 'an optional tech label', 'an optional description')
@enduml
```

