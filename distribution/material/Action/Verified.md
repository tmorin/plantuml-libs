# Verified


```text
material/Action/Verified
```

```text
include('material/Action/Verified')
```



| Illustration | Verified |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Verified.png) | ![illustration for Verified](../../material/Action/Verified.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerifiedXs>`
- `<$VerifiedSm>`
- `<$VerifiedMd>`
- `<$VerifiedLg>`





## Verified

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Verified
include('material/Action/Verified')

' renders the element
Verified('Verified', 'Verified', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Verified
include('material/Action/Verified')

' renders the element
Verified('Verified', 'Verified', 'an optional tech label', 'an optional description')
@enduml
```

