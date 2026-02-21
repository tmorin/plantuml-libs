# FactCheck


```text
material/Action/FactCheck
```

```text
include('material/Action/FactCheck')
```



| Illustration | FactCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/FactCheck.png) | ![illustration for FactCheck](../../material/Action/FactCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FactCheckXs>`
- `<$FactCheckSm>`
- `<$FactCheckMd>`
- `<$FactCheckLg>`





## FactCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FactCheck
include('material/Action/FactCheck')

' renders the element
FactCheck('FactCheck', 'Fact Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FactCheck
include('material/Action/FactCheck')

' renders the element
FactCheck('FactCheck', 'Fact Check', 'an optional tech label', 'an optional description')
@enduml
```

