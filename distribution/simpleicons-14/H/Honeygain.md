# Honeygain


```text
simpleicons-14/H/Honeygain
```

```text
include('simpleicons-14/H/Honeygain')
```



| Illustration | Honeygain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Honeygain.png) | ![illustration for Honeygain](../../simpleicons-14/H/Honeygain.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Honeygain
include('simpleicons-14/H/Honeygain')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Honeygain
include('simpleicons-14/H/Honeygain')

' renders the element
Honeygain('Honeygain', 'Honeygain', 'an optional tech label', 'an optional description')
@enduml
```

