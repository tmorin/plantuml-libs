# Unstop


```text
simpleicons/U/Unstop
```

```text
include('simpleicons/U/Unstop')
```



| Illustration | Unstop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unstop.png) | ![illustration for Unstop](../../simpleicons/U/Unstop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnstopXs>`
- `<$UnstopSm>`
- `<$UnstopMd>`
- `<$UnstopLg>`





## Unstop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unstop
include('simpleicons/U/Unstop')

' renders the element
Unstop('Unstop', 'Unstop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unstop
include('simpleicons/U/Unstop')

' renders the element
Unstop('Unstop', 'Unstop', 'an optional tech label', 'an optional description')
@enduml
```

