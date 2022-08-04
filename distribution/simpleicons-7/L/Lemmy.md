# Lemmy


```text
simpleicons-7/L/Lemmy
```

```text
include('simpleicons-7/L/Lemmy')
```



| Illustration | Lemmy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lemmy.png) | ![illustration for Lemmy](../../simpleicons-7/L/Lemmy.Local.png) |




## Lemmy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lemmy
include('simpleicons-7/L/Lemmy')

' renders the element
Lemmy('Lemmy', 'Lemmy', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lemmy
include('simpleicons-7/L/Lemmy')

' renders the element
Lemmy('Lemmy', 'Lemmy', 'an optional tech label', 'an optional description')
@enduml
```

