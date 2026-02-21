# PrintDisabled


```text
material/Communication/PrintDisabled
```

```text
include('material/Communication/PrintDisabled')
```



| Illustration | PrintDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PrintDisabled.png) | ![illustration for PrintDisabled](../../material/Communication/PrintDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrintDisabledXs>`
- `<$PrintDisabledSm>`
- `<$PrintDisabledMd>`
- `<$PrintDisabledLg>`





## PrintDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PrintDisabled
include('material/Communication/PrintDisabled')

' renders the element
PrintDisabled('PrintDisabled', 'Print Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PrintDisabled
include('material/Communication/PrintDisabled')

' renders the element
PrintDisabled('PrintDisabled', 'Print Disabled', 'an optional tech label', 'an optional description')
@enduml
```

