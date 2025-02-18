# Jordan


```text
simpleicons-14/J/Jordan
```

```text
include('simpleicons-14/J/Jordan')
```



| Illustration | Jordan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jordan.png) | ![illustration for Jordan](../../simpleicons-14/J/Jordan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JordanXs>`
- `<$JordanSm>`
- `<$JordanMd>`
- `<$JordanLg>`





## Jordan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jordan
include('simpleicons-14/J/Jordan')

' renders the element
Jordan('Jordan', 'Jordan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jordan
include('simpleicons-14/J/Jordan')

' renders the element
Jordan('Jordan', 'Jordan', 'an optional tech label', 'an optional description')
@enduml
```

