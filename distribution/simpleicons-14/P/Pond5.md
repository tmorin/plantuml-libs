# Pond5


```text
simpleicons-14/P/Pond5
```

```text
include('simpleicons-14/P/Pond5')
```



| Illustration | Pond5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pond5.png) | ![illustration for Pond5](../../simpleicons-14/P/Pond5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Pond5Xs>`
- `<$Pond5Sm>`
- `<$Pond5Md>`
- `<$Pond5Lg>`





## Pond5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pond5
include('simpleicons-14/P/Pond5')

' renders the element
Pond5('Pond5', 'Pond5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pond5
include('simpleicons-14/P/Pond5')

' renders the element
Pond5('Pond5', 'Pond5', 'an optional tech label', 'an optional description')
@enduml
```

