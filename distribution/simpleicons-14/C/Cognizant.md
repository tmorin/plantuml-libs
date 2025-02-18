# Cognizant


```text
simpleicons-14/C/Cognizant
```

```text
include('simpleicons-14/C/Cognizant')
```



| Illustration | Cognizant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cognizant.png) | ![illustration for Cognizant](../../simpleicons-14/C/Cognizant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CognizantXs>`
- `<$CognizantSm>`
- `<$CognizantMd>`
- `<$CognizantLg>`





## Cognizant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cognizant
include('simpleicons-14/C/Cognizant')

' renders the element
Cognizant('Cognizant', 'Cognizant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cognizant
include('simpleicons-14/C/Cognizant')

' renders the element
Cognizant('Cognizant', 'Cognizant', 'an optional tech label', 'an optional description')
@enduml
```

