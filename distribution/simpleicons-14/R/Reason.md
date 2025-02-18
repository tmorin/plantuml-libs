# Reason


```text
simpleicons-14/R/Reason
```

```text
include('simpleicons-14/R/Reason')
```



| Illustration | Reason |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Reason.png) | ![illustration for Reason](../../simpleicons-14/R/Reason.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReasonXs>`
- `<$ReasonSm>`
- `<$ReasonMd>`
- `<$ReasonLg>`





## Reason

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Reason
include('simpleicons-14/R/Reason')

' renders the element
Reason('Reason', 'Reason', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Reason
include('simpleicons-14/R/Reason')

' renders the element
Reason('Reason', 'Reason', 'an optional tech label', 'an optional description')
@enduml
```

