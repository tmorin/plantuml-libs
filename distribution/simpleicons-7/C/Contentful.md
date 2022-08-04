# Contentful


```text
simpleicons-7/C/Contentful
```

```text
include('simpleicons-7/C/Contentful')
```



| Illustration | Contentful |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Contentful.png) | ![illustration for Contentful](../../simpleicons-7/C/Contentful.Local.png) |




## Contentful

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Contentful
include('simpleicons-7/C/Contentful')

' renders the element
Contentful('Contentful', 'Contentful', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contentful
include('simpleicons-7/C/Contentful')

' renders the element
Contentful('Contentful', 'Contentful', 'an optional tech label', 'an optional description')
@enduml
```

