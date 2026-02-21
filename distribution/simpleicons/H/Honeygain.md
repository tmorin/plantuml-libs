# Honeygain


```text
simpleicons/H/Honeygain
```

```text
include('simpleicons/H/Honeygain')
```



| Illustration | Honeygain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Honeygain.png) | ![illustration for Honeygain](../../simpleicons/H/Honeygain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HoneygainXs>`
- `<$HoneygainSm>`
- `<$HoneygainMd>`
- `<$HoneygainLg>`





## Honeygain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Honeygain
include('simpleicons/H/Honeygain')

' renders the element
Honeygain('Honeygain', 'Honeygain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Honeygain
include('simpleicons/H/Honeygain')

' renders the element
Honeygain('Honeygain', 'Honeygain', 'an optional tech label', 'an optional description')
@enduml
```

