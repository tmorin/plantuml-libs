# Redhat


```text
simpleicons-14/R/Redhat
```

```text
include('simpleicons-14/R/Redhat')
```



| Illustration | Redhat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Redhat.png) | ![illustration for Redhat](../../simpleicons-14/R/Redhat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedhatXs>`
- `<$RedhatSm>`
- `<$RedhatMd>`
- `<$RedhatLg>`





## Redhat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Redhat
include('simpleicons-14/R/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redhat
include('simpleicons-14/R/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label', 'an optional description')
@enduml
```

