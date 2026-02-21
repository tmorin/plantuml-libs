# Roll20


```text
simpleicons-14/R/Roll20
```

```text
include('simpleicons-14/R/Roll20')
```



| Illustration | Roll20 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Roll20.png) | ![illustration for Roll20](../../simpleicons-14/R/Roll20.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Roll20Xs>`
- `<$Roll20Sm>`
- `<$Roll20Md>`
- `<$Roll20Lg>`





## Roll20

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Roll20
include('simpleicons-14/R/Roll20')

' renders the element
Roll20('Roll20', 'Roll20', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roll20
include('simpleicons-14/R/Roll20')

' renders the element
Roll20('Roll20', 'Roll20', 'an optional tech label', 'an optional description')
@enduml
```

