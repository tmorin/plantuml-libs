# Gcore


```text
simpleicons-14/G/Gcore
```

```text
include('simpleicons-14/G/Gcore')
```



| Illustration | Gcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gcore.png) | ![illustration for Gcore](../../simpleicons-14/G/Gcore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GcoreXs>`
- `<$GcoreSm>`
- `<$GcoreMd>`
- `<$GcoreLg>`





## Gcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gcore
include('simpleicons-14/G/Gcore')

' renders the element
Gcore('Gcore', 'Gcore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gcore
include('simpleicons-14/G/Gcore')

' renders the element
Gcore('Gcore', 'Gcore', 'an optional tech label', 'an optional description')
@enduml
```

