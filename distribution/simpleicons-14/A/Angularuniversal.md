# Angularuniversal


```text
simpleicons-14/A/Angularuniversal
```

```text
include('simpleicons-14/A/Angularuniversal')
```



| Illustration | Angularuniversal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Angularuniversal.png) | ![illustration for Angularuniversal](../../simpleicons-14/A/Angularuniversal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngularuniversalXs>`
- `<$AngularuniversalSm>`
- `<$AngularuniversalMd>`
- `<$AngularuniversalLg>`





## Angularuniversal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Angularuniversal
include('simpleicons-14/A/Angularuniversal')

' renders the element
Angularuniversal('Angularuniversal', 'Angularuniversal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angularuniversal
include('simpleicons-14/A/Angularuniversal')

' renders the element
Angularuniversal('Angularuniversal', 'Angularuniversal', 'an optional tech label', 'an optional description')
@enduml
```

