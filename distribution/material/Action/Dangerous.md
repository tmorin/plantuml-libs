# Dangerous


```text
material/Action/Dangerous
```

```text
include('material/Action/Dangerous')
```



| Illustration | Dangerous |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Dangerous.png) | ![illustration for Dangerous](../../material/Action/Dangerous.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DangerousXs>`
- `<$DangerousSm>`
- `<$DangerousMd>`
- `<$DangerousLg>`





## Dangerous

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Dangerous
include('material/Action/Dangerous')

' renders the element
Dangerous('Dangerous', 'Dangerous', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dangerous
include('material/Action/Dangerous')

' renders the element
Dangerous('Dangerous', 'Dangerous', 'an optional tech label', 'an optional description')
@enduml
```

