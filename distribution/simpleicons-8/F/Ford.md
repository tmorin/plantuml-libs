# Ford


```text
simpleicons-8/F/Ford
```

```text
include('simpleicons-8/F/Ford')
```



| Illustration | Ford |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Ford.png) | ![illustration for Ford](../../simpleicons-8/F/Ford.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons-8/F/Ford')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons-8/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label', 'an optional description')
@enduml
```

