# Httpie


```text
simpleicons/H/Httpie
```

```text
include('simpleicons/H/Httpie')
```



| Illustration | Httpie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Httpie.png) | ![illustration for Httpie](../../simpleicons/H/Httpie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HttpieXs>`
- `<$HttpieSm>`
- `<$HttpieMd>`
- `<$HttpieLg>`





## Httpie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Httpie
include('simpleicons/H/Httpie')

' renders the element
Httpie('Httpie', 'Httpie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Httpie
include('simpleicons/H/Httpie')

' renders the element
Httpie('Httpie', 'Httpie', 'an optional tech label', 'an optional description')
@enduml
```

