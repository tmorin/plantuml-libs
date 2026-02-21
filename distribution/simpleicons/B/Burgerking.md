# Burgerking


```text
simpleicons/B/Burgerking
```

```text
include('simpleicons/B/Burgerking')
```



| Illustration | Burgerking |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Burgerking.png) | ![illustration for Burgerking](../../simpleicons/B/Burgerking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BurgerkingXs>`
- `<$BurgerkingSm>`
- `<$BurgerkingMd>`
- `<$BurgerkingLg>`





## Burgerking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Burgerking
include('simpleicons/B/Burgerking')

' renders the element
Burgerking('Burgerking', 'Burgerking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Burgerking
include('simpleicons/B/Burgerking')

' renders the element
Burgerking('Burgerking', 'Burgerking', 'an optional tech label', 'an optional description')
@enduml
```

