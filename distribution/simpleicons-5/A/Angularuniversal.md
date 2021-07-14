# Angularuniversal


```text
simpleicons-5/A/Angularuniversal
```

```text
include('simpleicons-5/A/Angularuniversal')
```



| Illustration | Angularuniversal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Angularuniversal.png) | ![illustration for Angularuniversal](../../simpleicons-5/A/Angularuniversal.Local.png) |




## Angularuniversal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Angularuniversal
include('simpleicons-5/A/Angularuniversal')

' renders the element
Angularuniversal('Angularuniversal', 'Angularuniversal', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Angularuniversal
include('simpleicons-5/A/Angularuniversal')

' renders the element
Angularuniversal('Angularuniversal', 'Angularuniversal', 'an optional tech label')
@enduml
```

