# Apacheant


```text
simpleicons-14/A/Apacheant
```

```text
include('simpleicons-14/A/Apacheant')
```



| Illustration | Apacheant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apacheant.png) | ![illustration for Apacheant](../../simpleicons-14/A/Apacheant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheantXs>`
- `<$ApacheantSm>`
- `<$ApacheantMd>`
- `<$ApacheantLg>`





## Apacheant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apacheant
include('simpleicons-14/A/Apacheant')

' renders the element
Apacheant('Apacheant', 'Apacheant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apacheant
include('simpleicons-14/A/Apacheant')

' renders the element
Apacheant('Apacheant', 'Apacheant', 'an optional tech label', 'an optional description')
@enduml
```

