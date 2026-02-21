# Mantine


```text
simpleicons/M/Mantine
```

```text
include('simpleicons/M/Mantine')
```



| Illustration | Mantine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mantine.png) | ![illustration for Mantine](../../simpleicons/M/Mantine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MantineXs>`
- `<$MantineSm>`
- `<$MantineMd>`
- `<$MantineLg>`





## Mantine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mantine
include('simpleicons/M/Mantine')

' renders the element
Mantine('Mantine', 'Mantine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mantine
include('simpleicons/M/Mantine')

' renders the element
Mantine('Mantine', 'Mantine', 'an optional tech label', 'an optional description')
@enduml
```

