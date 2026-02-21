# Anycubic


```text
simpleicons/A/Anycubic
```

```text
include('simpleicons/A/Anycubic')
```



| Illustration | Anycubic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Anycubic.png) | ![illustration for Anycubic](../../simpleicons/A/Anycubic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnycubicXs>`
- `<$AnycubicSm>`
- `<$AnycubicMd>`
- `<$AnycubicLg>`





## Anycubic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Anycubic
include('simpleicons/A/Anycubic')

' renders the element
Anycubic('Anycubic', 'Anycubic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anycubic
include('simpleicons/A/Anycubic')

' renders the element
Anycubic('Anycubic', 'Anycubic', 'an optional tech label', 'an optional description')
@enduml
```

