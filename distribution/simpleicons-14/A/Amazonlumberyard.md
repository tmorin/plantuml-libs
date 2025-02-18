# Amazonlumberyard


```text
simpleicons-14/A/Amazonlumberyard
```

```text
include('simpleicons-14/A/Amazonlumberyard')
```



| Illustration | Amazonlumberyard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazonlumberyard.png) | ![illustration for Amazonlumberyard](../../simpleicons-14/A/Amazonlumberyard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonlumberyardXs>`
- `<$AmazonlumberyardSm>`
- `<$AmazonlumberyardMd>`
- `<$AmazonlumberyardLg>`





## Amazonlumberyard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonlumberyard
include('simpleicons-14/A/Amazonlumberyard')

' renders the element
Amazonlumberyard('Amazonlumberyard', 'Amazonlumberyard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonlumberyard
include('simpleicons-14/A/Amazonlumberyard')

' renders the element
Amazonlumberyard('Amazonlumberyard', 'Amazonlumberyard', 'an optional tech label', 'an optional description')
@enduml
```

