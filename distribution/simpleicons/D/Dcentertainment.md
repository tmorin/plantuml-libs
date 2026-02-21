# Dcentertainment


```text
simpleicons/D/Dcentertainment
```

```text
include('simpleicons/D/Dcentertainment')
```



| Illustration | Dcentertainment |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dcentertainment.png) | ![illustration for Dcentertainment](../../simpleicons/D/Dcentertainment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DcentertainmentXs>`
- `<$DcentertainmentSm>`
- `<$DcentertainmentMd>`
- `<$DcentertainmentLg>`





## Dcentertainment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dcentertainment
include('simpleicons/D/Dcentertainment')

' renders the element
Dcentertainment('Dcentertainment', 'Dcentertainment', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dcentertainment
include('simpleicons/D/Dcentertainment')

' renders the element
Dcentertainment('Dcentertainment', 'Dcentertainment', 'an optional tech label', 'an optional description')
@enduml
```

