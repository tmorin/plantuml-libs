# Autocannon


```text
simpleicons/A/Autocannon
```

```text
include('simpleicons/A/Autocannon')
```



| Illustration | Autocannon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autocannon.png) | ![illustration for Autocannon](../../simpleicons/A/Autocannon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutocannonXs>`
- `<$AutocannonSm>`
- `<$AutocannonMd>`
- `<$AutocannonLg>`





## Autocannon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autocannon
include('simpleicons/A/Autocannon')

' renders the element
Autocannon('Autocannon', 'Autocannon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autocannon
include('simpleicons/A/Autocannon')

' renders the element
Autocannon('Autocannon', 'Autocannon', 'an optional tech label', 'an optional description')
@enduml
```

