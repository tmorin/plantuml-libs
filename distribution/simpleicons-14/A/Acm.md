# Acm


```text
simpleicons-14/A/Acm
```

```text
include('simpleicons-14/A/Acm')
```



| Illustration | Acm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Acm.png) | ![illustration for Acm](../../simpleicons-14/A/Acm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcmXs>`
- `<$AcmSm>`
- `<$AcmMd>`
- `<$AcmLg>`





## Acm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Acm
include('simpleicons-14/A/Acm')

' renders the element
Acm('Acm', 'Acm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Acm
include('simpleicons-14/A/Acm')

' renders the element
Acm('Acm', 'Acm', 'an optional tech label', 'an optional description')
@enduml
```

