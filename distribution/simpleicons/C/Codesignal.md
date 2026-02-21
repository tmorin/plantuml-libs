# Codesignal


```text
simpleicons/C/Codesignal
```

```text
include('simpleicons/C/Codesignal')
```



| Illustration | Codesignal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codesignal.png) | ![illustration for Codesignal](../../simpleicons/C/Codesignal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodesignalXs>`
- `<$CodesignalSm>`
- `<$CodesignalMd>`
- `<$CodesignalLg>`





## Codesignal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codesignal
include('simpleicons/C/Codesignal')

' renders the element
Codesignal('Codesignal', 'Codesignal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codesignal
include('simpleicons/C/Codesignal')

' renders the element
Codesignal('Codesignal', 'Codesignal', 'an optional tech label', 'an optional description')
@enduml
```

