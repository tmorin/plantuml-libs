# Mdx


```text
simpleicons-7/M/Mdx
```

```text
include('simpleicons-7/M/Mdx')
```



| Illustration | Mdx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mdx.png) | ![illustration for Mdx](../../simpleicons-7/M/Mdx.Local.png) |




## Mdx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mdx
include('simpleicons-7/M/Mdx')

' renders the element
Mdx('Mdx', 'Mdx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mdx
include('simpleicons-7/M/Mdx')

' renders the element
Mdx('Mdx', 'Mdx', 'an optional tech label', 'an optional description')
@enduml
```

