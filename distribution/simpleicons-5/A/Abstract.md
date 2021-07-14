# Abstract


```text
simpleicons-5/A/Abstract
```

```text
include('simpleicons-5/A/Abstract')
```



| Illustration | Abstract |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Abstract.png) | ![illustration for Abstract](../../simpleicons-5/A/Abstract.Local.png) |




## Abstract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Abstract
include('simpleicons-5/A/Abstract')

' renders the element
Abstract('Abstract', 'Abstract', 'an optional tech label')
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

' loads the Item which embeds the element Abstract
include('simpleicons-5/A/Abstract')

' renders the element
Abstract('Abstract', 'Abstract', 'an optional tech label')
@enduml
```

