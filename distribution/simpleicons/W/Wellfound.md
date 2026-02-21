# Wellfound


```text
simpleicons/W/Wellfound
```

```text
include('simpleicons/W/Wellfound')
```



| Illustration | Wellfound |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wellfound.png) | ![illustration for Wellfound](../../simpleicons/W/Wellfound.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WellfoundXs>`
- `<$WellfoundSm>`
- `<$WellfoundMd>`
- `<$WellfoundLg>`





## Wellfound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wellfound
include('simpleicons/W/Wellfound')

' renders the element
Wellfound('Wellfound', 'Wellfound', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wellfound
include('simpleicons/W/Wellfound')

' renders the element
Wellfound('Wellfound', 'Wellfound', 'an optional tech label', 'an optional description')
@enduml
```

