# Intuit


```text
simpleicons/I/Intuit
```

```text
include('simpleicons/I/Intuit')
```



| Illustration | Intuit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Intuit.png) | ![illustration for Intuit](../../simpleicons/I/Intuit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IntuitXs>`
- `<$IntuitSm>`
- `<$IntuitMd>`
- `<$IntuitLg>`





## Intuit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Intuit
include('simpleicons/I/Intuit')

' renders the element
Intuit('Intuit', 'Intuit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Intuit
include('simpleicons/I/Intuit')

' renders the element
Intuit('Intuit', 'Intuit', 'an optional tech label', 'an optional description')
@enduml
```

