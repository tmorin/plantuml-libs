# Stackhawk


```text
simpleicons-8/S/Stackhawk
```

```text
include('simpleicons-8/S/Stackhawk')
```



| Illustration | Stackhawk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Stackhawk.png) | ![illustration for Stackhawk](../../simpleicons-8/S/Stackhawk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackhawkXs>`
- `<$StackhawkSm>`
- `<$StackhawkMd>`
- `<$StackhawkLg>`





## Stackhawk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Stackhawk
include('simpleicons-8/S/Stackhawk')

' renders the element
Stackhawk('Stackhawk', 'Stackhawk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackhawk
include('simpleicons-8/S/Stackhawk')

' renders the element
Stackhawk('Stackhawk', 'Stackhawk', 'an optional tech label', 'an optional description')
@enduml
```

