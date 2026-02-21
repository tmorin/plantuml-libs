# Carlsberggroup


```text
simpleicons/C/Carlsberggroup
```

```text
include('simpleicons/C/Carlsberggroup')
```



| Illustration | Carlsberggroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Carlsberggroup.png) | ![illustration for Carlsberggroup](../../simpleicons/C/Carlsberggroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarlsberggroupXs>`
- `<$CarlsberggroupSm>`
- `<$CarlsberggroupMd>`
- `<$CarlsberggroupLg>`





## Carlsberggroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Carlsberggroup
include('simpleicons/C/Carlsberggroup')

' renders the element
Carlsberggroup('Carlsberggroup', 'Carlsberggroup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Carlsberggroup
include('simpleicons/C/Carlsberggroup')

' renders the element
Carlsberggroup('Carlsberggroup', 'Carlsberggroup', 'an optional tech label', 'an optional description')
@enduml
```

