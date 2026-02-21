# Ford


```text
simpleicons/F/Ford
```

```text
include('simpleicons/F/Ford')
```



| Illustration | Ford |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Ford.png) | ![illustration for Ford](../../simpleicons/F/Ford.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FordXs>`
- `<$FordSm>`
- `<$FordMd>`
- `<$FordLg>`





## Ford

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ford
include('simpleicons/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label', 'an optional description')
@enduml
```

