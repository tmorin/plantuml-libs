# Abstract


```text
simpleicons/A/Abstract
```

```text
include('simpleicons/A/Abstract')
```



| Illustration | Abstract |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Abstract.png) | ![illustration for Abstract](../../simpleicons/A/Abstract.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbstractXs>`
- `<$AbstractSm>`
- `<$AbstractMd>`
- `<$AbstractLg>`





## Abstract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Abstract
include('simpleicons/A/Abstract')

' renders the element
Abstract('Abstract', 'Abstract', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Abstract
include('simpleicons/A/Abstract')

' renders the element
Abstract('Abstract', 'Abstract', 'an optional tech label', 'an optional description')
@enduml
```

