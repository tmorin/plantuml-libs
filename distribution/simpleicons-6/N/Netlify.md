# Netlify


```text
simpleicons-6/N/Netlify
```

```text
include('simpleicons-6/N/Netlify')
```



| Illustration | Netlify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Netlify.png) | ![illustration for Netlify](../../simpleicons-6/N/Netlify.Local.png) |




## Netlify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Netlify
include('simpleicons-6/N/Netlify')

' renders the element
Netlify('Netlify', 'Netlify', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Netlify
include('simpleicons-6/N/Netlify')

' renders the element
Netlify('Netlify', 'Netlify', 'an optional tech label')
@enduml
```

