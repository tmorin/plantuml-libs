# Umami


```text
simpleicons/U/Umami
```

```text
include('simpleicons/U/Umami')
```



| Illustration | Umami |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Umami.png) | ![illustration for Umami](../../simpleicons/U/Umami.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmamiXs>`
- `<$UmamiSm>`
- `<$UmamiMd>`
- `<$UmamiLg>`





## Umami

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Umami
include('simpleicons/U/Umami')

' renders the element
Umami('Umami', 'Umami', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Umami
include('simpleicons/U/Umami')

' renders the element
Umami('Umami', 'Umami', 'an optional tech label', 'an optional description')
@enduml
```

