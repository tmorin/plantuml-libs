# Webstorm


```text
simpleicons/W/Webstorm
```

```text
include('simpleicons/W/Webstorm')
```



| Illustration | Webstorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webstorm.png) | ![illustration for Webstorm](../../simpleicons/W/Webstorm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebstormXs>`
- `<$WebstormSm>`
- `<$WebstormMd>`
- `<$WebstormLg>`





## Webstorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webstorm
include('simpleicons/W/Webstorm')

' renders the element
Webstorm('Webstorm', 'Webstorm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webstorm
include('simpleicons/W/Webstorm')

' renders the element
Webstorm('Webstorm', 'Webstorm', 'an optional tech label', 'an optional description')
@enduml
```

