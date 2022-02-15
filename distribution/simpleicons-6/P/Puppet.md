# Puppet


```text
simpleicons-6/P/Puppet
```

```text
include('simpleicons-6/P/Puppet')
```



| Illustration | Puppet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Puppet.png) | ![illustration for Puppet](../../simpleicons-6/P/Puppet.Local.png) |




## Puppet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Puppet
include('simpleicons-6/P/Puppet')

' renders the element
Puppet('Puppet', 'Puppet', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Puppet
include('simpleicons-6/P/Puppet')

' renders the element
Puppet('Puppet', 'Puppet', 'an optional tech label')
@enduml
```

