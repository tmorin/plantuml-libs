# Icicibank


```text
simpleicons/I/Icicibank
```

```text
include('simpleicons/I/Icicibank')
```



| Illustration | Icicibank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Icicibank.png) | ![illustration for Icicibank](../../simpleicons/I/Icicibank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IcicibankXs>`
- `<$IcicibankSm>`
- `<$IcicibankMd>`
- `<$IcicibankLg>`





## Icicibank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Icicibank
include('simpleicons/I/Icicibank')

' renders the element
Icicibank('Icicibank', 'Icicibank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icicibank
include('simpleicons/I/Icicibank')

' renders the element
Icicibank('Icicibank', 'Icicibank', 'an optional tech label', 'an optional description')
@enduml
```

