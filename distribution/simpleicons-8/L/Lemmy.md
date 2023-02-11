# Lemmy


```text
simpleicons-8/L/Lemmy
```

```text
include('simpleicons-8/L/Lemmy')
```



| Illustration | Lemmy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lemmy.png) | ![illustration for Lemmy](../../simpleicons-8/L/Lemmy.Local.png) |




## Lemmy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lemmy
include('simpleicons-8/L/Lemmy')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lemmy
include('simpleicons-8/L/Lemmy')

' renders the element
Lemmy('Lemmy', 'Lemmy', 'an optional tech label', 'an optional description')
@enduml
```

